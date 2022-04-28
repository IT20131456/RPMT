import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts:[]
        };
    }

    componentDidMount(){
        this.retrievePosts();
    }

    retrievePosts(){
        axios.get("http://localhost:5000/posts").then(res => {
            if(res.data.success){
                this.setState({
                    posts:res.data.exsitingPosts
                });
                console.log(this.state.posts);
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
                    <th scope='col'>Topic</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Post Category</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.posts.map((posts,index)=>(
                    <tr key={index}>
                        <th scope='row'>{index+1}</th>
                        <td>
                            <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                            {posts.topic}
                            </a>
                        </td>
                        <td>{posts.discription}</td>
                        <td>{posts.postCategory}</td>
                        <td>
                            <a className='btn btn-warning' href='#'><i className='fas fa-edit'></i>&nbsp;Edit</a>
                            &nbsp;
                            <a className='btn btn-danger' href='#'><i className='far fa-trash-alt'></i>&nbsp;Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>

          <button className='btn btn-success'><a href="/add" style={{textDecoration:'none', color:'white'}}> Create New Post</a></button>

      </div>
    )
  }
}
