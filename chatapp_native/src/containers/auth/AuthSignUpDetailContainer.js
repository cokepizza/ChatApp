import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { imageUpload } from '../../lib/api/auth';

const AuthSignUpDetailContainer = () => {
    const { files } = useSelector(({ uploadImage }) => ({
        files: uploadImage.files,
    }));

    const dispatch = useDispatch();

    const onPressSubmit = useCallback(async () => {
        const formData = new FormData();

        const revisedFiles = files.map(file => file ? ({
            name: file.path.split('/').pop(),
            type: file.mime,
            uri: file.path,
        }) : null);

        formData.append('files', revisedFiles);

        await dispatch(imageUpload({
            formData,
        }));
        
    }, [dispatch, files]);
    
    return (
        <AuthSignUpDetail
            onPressSubmit={onPressSubmit}
        />
    );
};

export default AuthSignUpDetailContainer;