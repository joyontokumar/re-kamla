import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Teams from '../pages/TeamMembers'
import MentalHealth from '../pages/MentalHealth'
import Occupationaltherepist from '../pages/Occupationaltherepist'
import Clinicalpsychologist from '../pages/Clinicalpsychologist'
import Physiotherapist from '../pages/Physiotherapist'
import SpeechLanguageTherapy from '../pages/SpeechLanguageTherapy'
import Mdvi from '../pages/Mdvi'
import doctorProfileListPage from '../pages/doctorProfileListPage'
import HelpDeakPage from '../pages/HelpDeakPage'
// single mental doctor
import SingleDoctor from '../pages/SingleDoctor'
// single speech and language thearapy doctor
import SingleSpeech from '../pages/SpeechSingleDoctor'
import OccupationalSingleDoctor from '../pages/OccupationalSingleDoctor'
import SingleClinical from '../pages/Singleclinicalpsychologist'
import Singlephysiotherapist from '../pages/Singlephysiotherapist'
import Protibondi from '../pages/ProtibondiHealthLists'
import OnlineContent from '../pages/OnlineTutorialLists'
import OnlineSingleCategory from '../pages/OnlineSingleCategory'
import OnlineDetails from '../pages/OnlineDetails'

// admin routes
import Dashboard from '../components/adminPanel/dashboard/panel/Dashboard'
import AddComDoctor from '../components/adminPanel/dashboard/addDoctor/AddDoctor'
import AddFaculty from '../components/adminPanel/dashboard/addFaculty/addFaculty'

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/teams`}
            component={Teams}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/mental-health`}
            component={MentalHealth}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/occupational-therepist`}
            component={Occupationaltherepist}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/clinical-psychologist`}
            component={Clinicalpsychologist}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/physiotherapist`}
            component={Physiotherapist}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/speech-language-therapy`}
            component={SpeechLanguageTherapy}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/rabeya-yeasmin-neela`}
            component={Mdvi}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/doctors`}
            component={doctorProfileListPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/help-desk`}
            component={HelpDeakPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/mental-doctor/:id`}
            component={SingleDoctor}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/speech-language/:id`}
            component={SingleSpeech}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/occupational-doctor/:id`}
            component={OccupationalSingleDoctor}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/clinical-psychologist/:id`}
            component={SingleClinical}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/physio-therapist/:id`}
            component={Singlephysiotherapist}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/protibondi-lists`}
            component={Protibondi}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/online-contents`}
            component={OnlineContent}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/online-categories/:id`}
            component={OnlineSingleCategory}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/online-details/:id`}
            component={OnlineDetails}
          />

        {/* dashboard routes */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dashboard`}
            component={Dashboard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dashboard/adddoctor`}
            component={AddComDoctor}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dashboard/addfaculty`}
            component={AddFaculty}
          />

        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default Routes
