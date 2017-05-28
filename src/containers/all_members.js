 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { withRouter } from 'react-router-dom';
 import { Map, Marker, TileLayer } from 'react-leaflet';
 import { FaTimesCircle } from 'react-icons/lib/fa';
 import Columns from 'react-columns';
 import { fetchMembers, fetchMemberMap, fetchMemberSite } from '../actions';
 import MemberIcon from '../components/member_icon';


 class Members extends Component {
   constructor(props) {
     super(props);

     this.state = {};

     this.memberRender = this.memberRender.bind(this);
     this.closePopup = this.closePopup.bind(this);
     this.siteSetup = this.siteSetup.bind(this);
     this.closePopupSite = this.closePopupSite.bind(this);
   }

   componentDidMount() {
     this.props.fetchMembers();
   }

   closePopup() {
     this.props.fetchMemberMap(null);
   }

   closePopupSite() {
     this.props.fetchMemberSite(null);
   }

   siteSetup() {
     return ({
       __html: this.props.memberSite,
     });
   }

   memberRender() {
     if ((this.props.memberMap != null)) {
       const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg';
       const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';

       const position = [this.props.memberMap[0], this.props.memberMap[1]];
       console.log(position);
       const map = (
         <Map center={position} zoom={3}>
           <TileLayer
             url={stamenTonerTiles}
             attribution={stamenTonerAttr}
           />
           <Marker position={position} />
         </Map>

      );


       return (
         <div id="mapdiv" className="maps">
           <div id="closeButton">
             <button id="xbutton" onClick={() => this.closePopup()}><FaTimesCircle color="#EF4343" size="24" /></button>
           </div>
           {map}
         </div>
       );
     } else if (this.props.memberSite != null) {
       return (
         <div id="mapdiv" className="maps">
           <div id="closeButton">
             <button id="xbutton" onClick={() => this.closePopupSite()}><FaTimesCircle color="#EF4343" size="24" /></button>
           </div>
           <object type="text/html" data={this.props.memberSite} width="600px" height="550px" aria-label="Hellow world" />
         </div>
       );
     } else {
       return (
         <div />
       );
     }
   }
   render() {
     const members = this.props.all.map((member) => {
       const _id = member.lat_long[0] + member.lat_long[1];
       return (
         <MemberIcon key={_id} member={member} />
       );
     });

     const queries = [{
       columns: 2,
       query: 'min-width: 400px',
     },
     {
       columns: 3,
       query: 'min-width: 575px',
     },
     {
       columns: 4,
       query: 'min-width: 750px',
     }, {
       columns: 5,
       query: 'min-width: 1100px',
     }];


     return (
       <div className="container">
         <Columns queries={queries} gap="5">
           {members}
         </Columns>
         {this.memberRender()}
       </div>

     );
   }
}

 const mapStateToProps = state => (
   {
     all: state.members.all,
     memberMap: state.members.memberMap,
     memberSite: state.members.memberSite,
   }
);

 export default withRouter(connect(mapStateToProps, { fetchMembers, fetchMemberMap, fetchMemberSite })(Members));
