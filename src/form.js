import React from 'react';
import './styles.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value1:"",value2:"",value3:"",value4:"",value5:"",value6:""};
        this.username=this.username.bind(this);
        this.email=this.email.bind(this);
        this.dob=this.dob.bind(this);
        this.workexp=this.workexp.bind(this);
        this.contactno=this.contactno.bind(this);
        this.eduqual=this.eduqual.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    username(event){
        this.setState({value1:event.target.value});
    }

    email(event){
        this.setState({value2:event.target.value});
    }

    dob(event){
        this.setState({value3:event.target.value});
    }
    
    workexp(event){
        this.setState({value4:event.target.value});
    }

    contactno(event){
        this.setState({value5:event.target.value});
    }

    eduqual(event){
        this.setState({value6:event.target.value});
    }

    handleSubmit(event){
        if(this.state.value1==="")
        {
            alert("Invalid Value for username");
           
        }

        if(this.state.value2==="")
        {
            alert("Invalid value for email");
        
        }

        
        if(this.state.value3==="")
        {
            alert("Invalid value for DOB");
        
        }

        
        if(this.state.value4==="")
        {
            alert("Invalid value for Work Experience");
        
        }

        if(this.state.value5==="")
        {
            alert("Invalid value for Contact No");
        
        }

        if(this.state.value6==="")
        {
            alert("Invalid value for Educational Qualifications");
        
        }

        if(this.state.value1===""||this.state.value2===""||this.state.value3===""||this.state.value4===""||this.state.value5===""||this.state.value6===""){
            event.preventDefault();
            return false;
        }

        return true;

    }

    render(props){
        return(
            <div class="outer">
            <div class="main">
                <h1>Form</h1>
                <div class="progress">
                     <div class="progress-bar prog" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     <div class="progress-bar bg-danger prog" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     <div class="progress-bar bg-warning prog" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     <div class="progress-bar bg-success prog" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <form class="form shadow-lg p-3 mb-5 bg-white rounded" onSubmit={this.handleSubmit}  method="POST" action="http://localhost:3535/">
                    <table class="tb">
                        <tr class="r">
                            <td>
                                <label class="lbl">Username</label>
                            </td>
                            <td>
                                <input class="in" type="text" value={this.state.value1} onChange={this.username} name="uname"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="lbl">Email ID</label>
                            </td>
                            <td>
                            <input class="in" type="email" value={this.state.value2} onChange={this.email} name="email"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="lbl">DOB</label>
                            </td>
                            <td>
                            <input class="in" type="date" value={this.state.value3} onChange={this.dob} name="dob"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="lbl">Work Experience</label>
                            </td>
                            <td>
                            <input class="in" type="number" value={this.state.value4} onChange={this.workexp} name="workexp"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="lbl">Contact No.</label>
                            </td>
                            <td>
                            <input class="in" type="number" value={this.state.value5} onChange={this.contactno} name="contactno"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="lbl">Educational Qualifications</label>
                            </td>
                            <td>
                            <textarea class="in" type="text" value={this.state.value6} onChange={this.eduqual} name="eduqual"/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" class="form shadow-lg p-3 mb-5 bg-white rounded btn btn-block btn-outline-danger submit mx-auto " data-toggle="popover" data-placement="right" data-content="If you like feeling awesome, Click Submit!"  value="Submit!"/>
                </form>
                </div>
                </div>
        );
    }
}

export default Form;