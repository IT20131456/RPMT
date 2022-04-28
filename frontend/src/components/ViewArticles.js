import React, { Component } from 'react'
import axios from "axios";

export default class ViewArticles extends Component {
    constructor(props){
        super(props);

        this.state = {
            articles:[]
        };
    }

    componentDidMount(){
        this.retrieveArticles();
    }

    // To get all data
    retrieveArticles(){
        axios.get("http://localhost:5000/article/all").then(res => {
            if(res.data.success){
                this.setState({
                    articles:res.data.exsitingArticles
                });
                console.log(this.state.articles);
            }
        });
    }

  render() {
    return (
      <div className='container'>
          <table className="table">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Group ID</th>
                    <th scope='col'>Select</th>
                    <th scope='col'>Comment</th>
                    <th scope='col'>File</th>
                    <th scope='col'>Preview</th>
                </tr>
            </thead>
            <tbody>
                {this.state.articles.map((articles,index)=>(
                    <tr key={index}>
                        <th scope='row'>{index+1}</th>
                        <td>{articles.groupid}</td>
                        <td>{articles.select}</td>
                        <td>{articles.comment}</td>
                        <td>{articles.files}</td>
                        <td>
                            <a className='btn btn-success' rel="noreferrer" target="_blank" href={process.env.PUBLIC_URL + `/uploads/${articles.files}`}>View</a>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>

          <button className='btn btn-success'><a href="/articles/add" style={{textDecoration:'none', color:'white'}}>Add New Article</a></button>

      </div>
    )
  }
}
