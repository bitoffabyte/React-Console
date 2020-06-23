import React,{Component} from 'react'
import './Console.css'
const commands = {
    'help': "lists all the commands",
    'clear':"clears the terminal"
}
class Console extends Component{
    state={
        pastCmd:[]
    }

    render(){
        let command = (i)=>{
            if(i === 'help'){
                // alert('oi')
                let k = ['Here are a list of commands']
                Object.keys(commands).forEach(element => {
                    k.push(element + " : " + commands[element])
                });
                k.push(' ')
                let ss = this.state.pastCmd
                ss.push(k)
                console.log(k)
                this.setState({pastCmd:ss})
            }
            if(i === 'clear'){
                this.setState({pastCmd:[]})
            }
        }
        let update = (e)=>{
            if(e.key === 'Enter'){
                console.log(e.target.value)
                if(Object.keys(commands).includes(e.target.value)){
                    command(e.target.value)
                    e.target.value = ""
                }
                else{
                    let s = this.state.pastCmd
                    s.push(["~Equinox "+e.target.value,"Error " +e.target.value+" is not a valid command "])
                    this.setState({pastCmd:s})
                    console.log(this.state.pastCmd)
                    e.target.value = ""
                }
            }
        }
        return(
            <div>
                <div>
                    {this.state.pastCmd.map(i=>{
                        return(
                            <div key = {i}>
                                {i.map(k=>(
                                    <div key ={k} >
                                        {k}
                                    </div>
                                )
                                )}
                            </div>
                        )
                    })}
                </div>
                ~Equinox $<input type="text" autoFocus onKeyDown={update} class = 'inp' />
            </div>
        )
    }
}
export default Console