import {autorun,observable} from 'mobx'

class TestStore {
  @observable mobxArray = ['array item 1','array item 2']
  @observable mobxText = 'text 1'
}

var store = window.store = new TestStore

export default store

autorun(()=>{
  console.log('mobx store : mobxArray >>>',store.mobxArray)
  console.log('mobx store : mobxText >>>',store.mobxText)
})


// example from tine

// export const Test2Store = observable({
//   mobxArray: ['array item 1','array item 2'],
//   mobxText: 'text 1'
// })