import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});


// Comments 

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials: 'same-origin'
    }).then(response => {
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
    .then(response => dispatch(addComment(response)))
    .catch(error => dispatch(console.log("Post comments ", error.message)));
}


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


// Lideres


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailure(error.message)));
}


export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailure = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

// Feedbacks

export const postFeedback = (feedback) => (dispatch) => {

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(feedback),
        headers:{
            'Content-Type':'application/json'
        },
        credentials: 'same-origin'
    }).then(response => {
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
    .catch(error => dispatch(console.log("Post comments ", error.message)));
}