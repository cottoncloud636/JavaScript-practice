
//constructor a node
class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}

class SLL{
    constrctor(){
        this.head=null; //head pointer points to the first node
    }

    addFront(value){
        var newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        return this.head;
    }

    removeFront(){
        var removeNode=this.head;
        this.head=removeNode.next;
        removeNode.next=null;
        return this.head;
    }

    front(){
        if (this.head==null){
            return null;
        } else{
            return this.head.value;
        }
        
    }

    display(){
        var listStr="";
        if(this.head==null){
            return "";
        }

        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null){
            listStr += ", " + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}

var mySLL=new SLL();
console.log(mySLL.display());
mySLL.addFront(18);
mySLL.addFront(5);
mySLL.addFront(73);