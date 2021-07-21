class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the "top" of our stack here?

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // push(value) - adds the given value to the stack
    push(value) {
        var new_node = new ListNode(value);

        // if nothing is in the list
        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    

    // pop() - removes the top value from stack and returns it
    pop() {

        if (this.head == null && this.tail == null) {
            return undefined;
        }
        else if (this.head && this.head.next == null) {
            var x = this.head
            this.head = null
            this.tail = null
            return x.value
        }
        else {
            var x = this.head
            this.head = this.head.next
            x.next = null
            return x.value
        }
    }

    // top() - returns the top value without removing it
    top() {
        return this.head.value;
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null) {
            return true;
        }
        return false
    }

    // size() - returns the size of the stack
    size() {
        var count = 0;
        var runner = this.head;
        while(runner != null){
            runner = runner.next;
            count += 1;
        }
        return count
    }
    
    display() {
        var output = '';

        var runner = this.head;
        if (runner == null) {
            return undefined
        }
        while (runner.next != null) {
            output += runner.value + ' - ';
            runner = runner.next;
        }

        output += runner.value;

        return output;
    }
}

// bonus - we can make this much quicker to run, at the expense
// of a slight descrease of speed in the push/pop operations

var x = new SLLStack();

x.push(6)
x.push(8)
x.push(14)
x.push(23)
console.log(x.display())
console.log(x.size())
console.log(x.contains(14));
console.log(x.contains(329));
console.log(x.top());
console.log(x.pop());
console.log(x.size())
console.log(x.isEmpty())
console.log(x.display())