import React,{Component,Fragment} from 'react';
import {Container,Card,Button,CardTitle,Row,Col,Alert,Form} from 'reactstrap';
import movie from './db.json';
import styles from './MovieListCss.css';
import axios from 'axios';
// import jsonData from './db.json';
export default class MovieList extends Component{
// style={
// .row:{
//   marginTop:20%;
// }
// }
state = {
  movies: [],
  newMovieName: "",
  newMovieyear:"",
  newMovieActor:"",
  newMoviedirector:""
}
componentDidMount() {
    axios.get('http://localhost:3010/movies')
        .then(res => {
            this.setState({
                movies: res.data
            });
        });
}
nameChanged(e){
e.preventDefault();
        this.setState({
            newMovieName: e.target.value
        })
    
}

yearChanged(e){
    e.preventDefault();
    this.setState({
        newMovieyear: e.target.value
    })

}

directorChanged(e){
    e.preventDefault();
    this.setState({
        newMoviedirector: e.target.value
    })

}
actorChanged(e){
    e.preventDefault();
    this.setState({
        newMovieActor: e.target.value
    })

}

onSubmit(event) {
    event.preventDefault();
    const newMovie = {
        title: this.state.newMovieName,
        year: this.state.newMovieyear,
        director:this.state.newMoviedirector,
        actors:this.state.newMovieActor
    };

    axios.post('http://localhost:3010/movies', newMovie)
        .then(res => {
            const oldmovielis = this.state.movies;
            const newmovielis = [...oldmovielis, res.data];
            this.setState({
                movies: newmovielis,
                newMovieName:"",
                newMovieyear:"",
                newMovieActor:"",
                newMoviedirector:""
            });
        }).catch(err => {

        });

}                               
render(){
    return(
        <Fragment>
           <Form onSubmit={this.onSubmit.bind(this)} className="form">
            MovieName : <input className ="input" onChange={this.nameChanged.bind(this)} type="text" placeholder="Enter new Movie" value={this.state.newMovieName}/><br/>
            Movie_Year : <input className ="input" onChange={this.yearChanged.bind(this)}type="text" placeholder="Enter new Movie year" value={this.state.newMovieyear}/><br/>
            Movie_Direct : <input className ="input" onChange={this.directorChanged.bind(this)} type="text" placeholder="Enter new Movie Directors" value={this.state.newMoviedirector}/><br/>
            Movie_Actor : <input className ="input" onChange={this.actorChanged.bind(this)} type="text" placeholder="Enter new Movie Actor" value={this.state.newMovieActor}/><br/>
            <input type="submit"className="button1" value="create"/>
            </Form>
          <Row className={styles.row}>
            {
                
            this.state.movies.map(
                  (movielist,i) =>(
                  <Col xs="6" sm="4" key={i} >
                  <hr/><br/>
                    <Card body className={styles.col} >
                        <CardTitle className={movielist.card}></CardTitle>
                                <div>Movie : {movielist.title}</div>
                                <div >Movie_Year : {movielist.year}</div>
                                <div>Actors : {movielist.actors} </div>
                                <div>Director : {movielist.director} </div>
                          <Col sm={4}></Col>
                          <Button className="button">X</Button> 
                    </Card>
                 
                    <hr/>
                  </Col> 
                  )
                )
                  }
          
            </Row>
        
        </Fragment>
    )
    
        }
    }
  
  