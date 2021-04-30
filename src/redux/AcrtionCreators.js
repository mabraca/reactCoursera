import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


// Platos-Menu

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error('Error ' + response.status + ': '+ response.statusText);
                error.response  = response;
                throw error;
            }
        },
        error => {
            // Error comunication whit server
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailure(error.message)));
}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailure = (errmess) => ({
    type: ActionTypes.DISHES_FAILURE,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});



// Comentarios

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error('Error ' + response.status + ': '+ response.statusText);
                error.response  = response;
                throw error;
            }
        },
        error => {
            // Error comunication whit server
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailure(error.message)));
}


export const commentsFailure = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



// Promociones


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error('Error ' + response.status + ': '+ response.statusText);
                error.response  = response;
                throw error;
            }
        },
        error => {
            // Error comunication whit server
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailure(error.message)));
}


export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promosFailure = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});