import React, {Component} from 'react';
import "./NumericButton.css";

class NumericButton extends Component{
  render(){
    return(
        <div className="NumericButton">
          <br/>

          <b href="7">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name7}
          </b>
          <b1 href="8">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name8}
          </b1>
          <b2 href="9">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name9}
          </b2>
          <b3 href="4">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name4}
          </b3>
          <b4 href="5">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name5}
          </b4>
          <b5 href="6">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name6}
          </b5>
          <b6 href="1">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name1}
          </b6>
          <b7 href="2">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name2}
          </b7>
          <b8 href="3">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name3}
          </b8>
          <b9 href="0">
            <span/>
            <span/>
            <span/>
            <span/>
            {this.props.name0}
          </b9>
        </div>
    );
  }
}

export default NumericButton;