import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ajouteremploye from './Ajouteremploye';
import Modifier from './Modifier';
import Surrprimer from'./Surrprimer';
import Consulter from'./Consulter';
import axios from 'axios';
export default class Body extends Component {
  state = {
    employeeCount: null
  };
  state = {
    inProgressProjectsCount: null
  };
  state = {
    completedProjectsCount: null
  };
  state = {
    pausedProjectsCount: null
  };

  async componentDidMount() {
    try {
      const employeeResponse = await axios.get('http://localhost:7000/employees/count');
      const inProgressProjectResponse = await axios.get('http://localhost:7000/projects/inprogress/count');
      const completedProjectResponse = await axios.get('http://localhost:7000/projects/completed/count');
      const pausedProjectResponse = await axios.get('http://localhost:7000/projects/paused/count');
      this.setState({ 
        employeeCount: employeeResponse.data.count,
        inProgressProjectsCount: inProgressProjectResponse.data.count,
        completedProjectsCount: completedProjectResponse.data.count,
        pausedProjectsCount:   pausedProjectResponse.data.count
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ 
        employeeCount: -1,
        inProgressProjectsCount: -1,
        completedProjectsCount: -1,
        pausedProjectsCount: -1
      });
    }
  }
  
  render() {
    // const { employeeCount } = this.state;
    const {employeeCount, inProgressProjectsCount, completedProjectsCount, pausedProjectsCount } = this.state;
    return (
        
      <div>{/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Acceuil</a></li>
              
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p> Nombre employés</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              
            </div> */}
            <div className="small-box bg-info">
          <div className="inner">
          <h3>{employeeCount !== null ? employeeCount : 'Loading...'}</h3>
            <p>Nombre employés</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
        </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            {/* <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Nombre de chantier en cours</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
             
            </div> */}
            <div className="small-box bg-info">
          <div className="inner">
            <h3>{inProgressProjectsCount !== null ? inProgressProjectsCount : 'Loading...'}</h3>
            <p>Nombre de projets en cours</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
        </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
            <h3>{completedProjectsCount !== null ? completedProjectsCount : 'Loading...'}</h3>
              <div className="inner">
                
                <p>nombre  des chantiers terminés</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
              <h3>{ pausedProjectsCount !== null ?  pausedProjectsCount : 'Loading...'}</h3>
                <p>nombre des chantiers en pause</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              
            </div>
          </div>
          {/* ./col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <section className="col-lg-12 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  
                </h3>
                <div className="card-tools">
                  <ul className="nav nav-pills ml-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    
                  </ul>
                </div>
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                  {/* Morris chart - Sales */}
                  {/* <Router>
                  <Routes>
                        <Route path="/ajouteremploye" element={<Ajouteremploye />} />
                         <Route path="/surrprimer" element={<Surrprimer/>} />
                         <Route path="/modifier" element={<Modifier/>} />
                         <Route path="/consulter" element={<Consulter/>} />
                        </Routes>
                 </Router> */}
                  <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                  <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                    <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                  </div>
                </div>
              </div>{/* /.card-body */}
            </div>
          
          </section>
          
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  
</div>


    )
  }
}