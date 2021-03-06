import store from './store';

class TheServer {
    request_tasks() {
        $.ajax("api/v1/tasks", {
          method: "get",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          success: (resp)  => {
            store.dispatch({
                type: 'TASKS_LIST',
                tasks: resp.data,

            });
          }
        });
      }
  
      delete_task(data) {
        $.ajax("api/v1/tasks/"+data.id, {
          method: "delete",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
        });
      }
      
      submit_task(data) {
        $.ajax("api/v1/tasks", {
          method: "post",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          data: JSON.stringify({task: data}),
          success: (resp)  => {
            store.dispatch({
                type: 'ADD_TASK',
                task: resp.data,

            });
          }
        });
      }

      submit_user(data) {
        $.ajax("api/v1/users", {
          method: "post",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          data: JSON.stringify({user: data}),
          success: (resp)  => {
            store.dispatch({
                type: 'ADD_USER',
                user: resp.data,

            });
          }
        });
      }

      submit_login(data) {
        $.ajax("api/v1/token", {
          method: "post",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          data: JSON.stringify(data),
          success: (resp)  => {
            store.dispatch({  
                type: 'SET_TOKEN',
                token: resp,

            });
          }
        });
      }



      request_users() {
        $.ajax("api/v1/users", {
          method: "get",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          success: (resp) => {
            store.dispatch({
                type: 'USERS_LIST',
                users: resp.data,

            });
          }
        });
      }
};

export default new TheServer();