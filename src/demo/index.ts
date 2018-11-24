import { inject, injectFactory } from '../index'

class Store {
  num = 1
}

class Action {
  // @inject(Store)
  // private store: Store

  // // constructor(store: Store) {
  // //   this.store = store
  // // }
  

  // setNum(num: number) {
  //   this.store.num = num
  // }
}

const result = injectFactory({
  Store,
  Action
})

console.log(123, result.Action)

// result.group.Action.setNum(2)