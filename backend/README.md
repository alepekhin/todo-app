# TODO app backend - Nest, GraphQL, MongoDB


## Playground
```
mutation {
	  createTodo(payload:{description:"fff", done:false}) {_id, description,done}
}

query {
	  todos {_id, description,done}
}

mutation {
	  updateTodo(payload:{_id:"60559f1fbfd3282a2b164a07", description:"new descr",done:false})
}

mutation {
	  deleteTodo(_id:"60559f1fbfd3282a2b164a07") {_id, description, done}
} 

```
