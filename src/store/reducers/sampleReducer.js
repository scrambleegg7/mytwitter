const InitState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]    
}


const sampleReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log("create_proeject from sampleReducer ", action.project  )
            return state;

        default:
            return state;

    }
}

export default sampleReducer;