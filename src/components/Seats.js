import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import {connect} from 'react-redux'
import HousePanel from './HousePanel'
import slug from 'slug'

class Houses extends Component{
	render(){
		const {seats,location,match}=this.props
		return(
			<div className='container two-column' >
				<Sidebar 
					title='Seats Of Houses'
					list={seats}
					{...this.props} />
				{location.pathname==='/seats'
					?<div className='sidebar-instruction header'>Select a seat</div>
					:null}
				<Route path={`${match.url}/:id`} render={({match:{params}})=>(
          <div className='panel'>
            <HousePanel id={params.id}>
              {(house)=> !house.name
                ? null
                : <div className='panel'>
                    <img className='house-avatar' src={`https://raw.githubusercontent.com/valarliang/data/master/gotimg/${slug(seats.find(e=>e.id===Number(params.id)).name)}.jpg`} alt={house.name}/>
                    <h1 className='medium-header'>{house.name}</h1>
                    <div className='panel-title'>{house.words?`"${house.words}"`:'None'}</div>
                    <div className="row">
	                    <ul className='info-list' style={{marginRight:'80px'}}>
	                      <li>CurrentLord<div>{house.currentLord}</div></li>
	                      <li>Founded<div>{house.founded?house.founded:<div>unknown</div>}</div></li>
	                    </ul>
	                    <ul className='info-list'>
	                      <li>Region<div>{house.region}</div></li>
	                      <li>Seats<div>{house.seats.join('/')}</div></li>
	                    </ul>
                    </div>
                    <Link
                      className='center btn-main'
                      to={`/${params.id}`}>
                        House Page
                    </Link>
                  </div>}
            </HousePanel>
          </div>
				)} />
			</div>
		)
	}
}

export default connect(({seats})=>({
	seats,
}))(Houses)