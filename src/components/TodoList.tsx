import React, {Component} from "react";
import './styles/stylecomponent.css';
interface Props{}
interface State{
    task: string;
    tasks: string[];
    showStats: boolean;
    index: number;
}


class TodoList extends Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            task: "",
            tasks:[],
            showStats: false,
            index: 0
        };
    }

    handleclickadd(e: any){
        e.preventDefault();
        
        if(this.state.task==="")
        {
              this.setState(
                  {
                      task: ""
                  }
              )
        }
        else{
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: "",
            showStats: true
        });

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        }

        //console.log(this.state.tasks);
    }

    handleclickremove(e:any)
    {
        e.preventDefault();
        console.log(e);
    }

    render(){
        return(
            <div className="homepage">
                <form className = "form-display">
                    <h2>My TodoList</h2>
                    <input className = "input-display" type = "text" placeholder="Enter task"
                    onChange = {event => this.setState({task: (event.target.value)})}/>
                    <button className = "btn-display" 
                    disabled={!this.state.task}onClick={this.handleclickadd.bind(this)}>Add Task</button>
                </form>
                {
                    this.state.showStats?
                    <div>
                        <ul>
                        {this.state.tasks.map((todo) => 
                        <div className="list"><li>{todo}<button className="btn-list"
                        onClick = {event => this.setState({
                            tasks : this.state.tasks.filter(task => task != todo)
                         })}>Remove Task</button></li></div>)}
                        </ul>
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        );
    }
}

export default TodoList;