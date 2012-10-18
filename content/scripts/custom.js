function sayhello1() {
    alert("Hello from global function.");
}

var test = {
    sayHello2: function() {
        alert("Hello from namespaced function.");
    }
};
