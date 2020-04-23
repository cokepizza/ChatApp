import { handleActions, createAction } from 'redux-actions';

//  화면전환시 action dispatch

const initialState = {
    items: [{
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
    },{
        uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
    }],
};

export default handleActions({

}, initialState);