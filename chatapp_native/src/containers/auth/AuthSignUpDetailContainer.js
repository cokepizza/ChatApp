import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthSignUpDetail from '../../components/auth/AuthSignUpDetail';
import { createAuthImage } from '../../modules/image';

const AuthSignUpDetailContainer = () => {
    const { files } = useSelector(({ image }) => ({
        files: image.files,
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

        await dispatch(createAuthImage({
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