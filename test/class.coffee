class MyClass
    constructor: (@greeting)->

    print: (name)->
        console.log "#{@greeting} #{name}"
