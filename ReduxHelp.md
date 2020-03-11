## Добавление Redux в проект

1. Установка

    ```bash
    npm install --save redux react-redux
    ```

2. Provider
    
    Для того, чтобы компоненты могли подключаться к redux store, они должны быть child'ами (не обязательно непосредственными) компонента `Provider` из пакета `react-redux`.

    ```javascript
    const App = () => (
      <Provider store={store}>
        <YourComponent1 />
        <YourComponent2 />
      </Provider>
    );
    ```

    Таким образом, `YourComponent1` и `YourComponent2` и все их поддеревья могут получить доступ к store. Props `store` будет создан на следующем шаге.

3. store

    Prop `store` для компонента `Provider` создается с помощью ф-ии  `createStore` из модуля `redux`.    
    
    ```javascript
    const store = createStore(rootReducer);
    ```

4. rootReducer

    Reducer - чистая ф-ия, которая обрабатывает все экшены и **immutably** вносит изменения в store.
    ```javascript
    const defaultState = {
      key1: 69,
      key2: 'Cool'
    }

    const rootReducer = (state = defaultState, action) => {
      switch (action.type) {
        case ACTION_1: {
          return {
            ...state,
            key2: 'Cool!',
            // some other modifications
          }
        }
        case ACTION_2: {
          return {
            ...state,
            key2: action.payload,
            // some other modifications
          }
        }
        default: {
          return state;
        }
      }
    }
    ```

5. Actions

    Action - js объект, имеющий два поля:
    * type - тип экшена
    * payload - любые данные, необходимые для изменения

    ```javascript
    const ACTION_1 = 'ACTION_1';
    const action1 = {
      type: ACTION_1
    } // экшн может быть без payload

    const ACTION_2 = 'ACTION_2';
    const action2 = (id) => ({
      type: ACTION_1,
      payload: id
    }); // такие экшены называют action creator - ф-ия, результатом работы которой является action, то есть объект с type и payload
    ```

6. Подключение компонентов к redux

    Компоненты подключаются с помощью ф-ии `connect` из пакета `react-redux`. Эта ф-ия имеет два параметра:
    * mapStateToProps - ф-ия, которая показывает, какие поля из store будут переданы компоненту в качестве props
    * mapDispatchToProps - ф-ия, которая показывает, какие dispatcher'ы (ф-ии, "отправляют" action'ы в redicer) будут переданы компоненту в качестве props

    ```javascript
    const mapStateToProps = store => ({
      renamedKey1: store.key1,
      key2: store.key2
    });

    const mapDispatchToProps = dispatch => ({
      dispatcher1: () => dispatch(action1), // action1 - это уже action, т.е. js объект
      dispatcher2: (id) => dispatch(action2(id)) // action2 - это action creator, поэтому его нужно вызвать action2(id), чтобы получить action js объект
    });

    const YourComponent1 = ({ renamedKey1, key2, dispatcher1, dispatcher2 }) => {
      const id = Math.random();

      return (
        <div>
          <button onClick={dispatcher1}>btn1</button>
          <button onClick={() => dispatcher2(id)}>btn2</button>
        </div>
      )
    }

    export default connect(mapStateToProps, mapDispatchToProps)(YourComponent1)
    ```
