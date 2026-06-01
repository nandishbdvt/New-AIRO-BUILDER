import { RouteObject } from 'react-router-dom';

// MAIN PAGES
import HomePage from './pages/index';

// HOME
import AboutJnncePage from './pages/aboutjnnce';
import VisionPage from './pages/vision';
import AboutNesPage from './pages/aboutnes';

import MessageFromPresidentPage from './pages/messagefrompresident';
import MessageFromSecretaryPage from './pages/messagefromsecretary';
import MessageFromPrincipalPage from './pages/messagefromprincipal';
import MessageFromAcPage from './pages/messagefromac';

import GoverningCouncilPage from './pages/governingcouncil';
import StatutoryCommitteesPage from './pages/statutory-committees';
import AdminCommitteesPage from './pages/admin-committees';

import PrincipalPage from './pages/principal';
import KeyFunctionariesPage from './pages/keyfunctionaries';
import AdministrativeSectionPage from './pages/administrativesection';

import DownloadsPage from './pages/downloads';
import RankingPage from './pages/ranking';
import GreenpolicyPage from './pages/greenpolicy';
import EmpbenefitsPage from './pages/empbenefits';
import AutomationPage from './pages/automation';
import ContactPage from './pages/contact';

// TOP LINKS
import NirfPage from './pages/nirf';
import VtuPage from './pages/vtu';
import NaacPage from './pages/naac';
import VirtualTourPage from './pages/virtual-tour';
import IrinsPage from './pages/irins';

// ADMISSIONS
import AdmissionsPage from './pages/admissions';
import UgPage from './pages/ug';
import PgPage from './pages/pg';
import PhdPage from './pages/phd';
import ProspectusPage from './pages/prospectus';
import AdmissionContactPage from './pages/admissioncontact';

// ACADEMICS
import AcademicsPage from './pages/academics';
import DepartmentsPage from './pages/departments';


import CoePage from './pages/coe';

import IeiPage from './pages/iei';
import CsiPage from './pages/csi';
import SaePage from './pages/sae';
import IifPage from './pages/iif';
import IetePage from './pages/iete';
import IstePage from './pages/iste';
import IeeePage from './pages/ieee';

import MouPage from './pages/mou';
import NewsletterPage from './pages/newsletter';

// FACILITIES
import FacilitiesPage from './pages/facilities';
import LibraryPage from './pages/library';
import HostelPage from './pages/hostel';
import SportsPage from './pages/sports';
import TransportPage from './pages/transport';
import McentrePage from './pages/mcentre';
import GuesthousePage from './pages/guesthouse';
import PofPage from './pages/pof';
import CbaPage from './pages/cba';
import CantPage from './pages/cant';

// STUDENT SUPPORT
import StudentsupportPage from './pages/studentsupport';
import ScholarshipPage from './pages/scholarship';
import MentoringPage from './pages/mentoring';
import AntiraggingPage from './pages/antiragging';
import ExamPage from './pages/exam';
import FeepaymentPage from './pages/feepayment';
import NssPage from './pages/nss';
import RedcrossPage from './pages/redcross';
import NptelPage from './pages/nptel';
import CulturalcrewPage from './pages/culturalcrew';
import StudentclubsPage from './pages/studentclubs';
import MeritoriousawardsPage from './pages/meritoriousawards';

// CIE & RESEARCH PARK
import CiePage from './pages/cie';
import NaincPage from './pages/nainc';
import NewgeniedcPage from './pages/newgeniedc';
import CartPage from './pages/cart';
import TbiPage from './pages/tbi';
import RcentrePage from './pages/rcentre';
import RparkPage from './pages/rpark';
import ConsultaancyPage from './pages/consultaancy';
import FundingPage from './pages/funding';

// TRAINING & PLACEMENT
import PlacementPage from './pages/placement';
import TrainingPage from './pages/training';
import InternshipPage from './pages/internship';

// IQAC
import IqacPage from './pages/iqac';
import CmPage from './pages/cm';
import IqacmembersPage from './pages/iqacmembers';
import IqacCalendarPage from './pages/iqac-calendar';
import IqacmeeproPage from './pages/iqacmeepro';

// MORE
import AlumniPage from './pages/alumni';
import GalleryPage from './pages/gallery';
import CampuslifePage from './pages/campuslife';
import MediaPage from './pages/media';
import JnncecareerPage from './pages/jnncecareer';
import CoursesPage from './pages/courses';
import CourseDetailPage from './pages/course-detail';


export const routes: RouteObject[] = [
  // HOME
  {
    path: '/',
    element: <HomePage />,
  },


  {
    path: '/courses',
    element: <CoursesPage />,
  },
  {
    path: '/courses/:slug',
    element: <CourseDetailPage />,
  },
  
  // TOP LINKS
  {
    path: '/nirf',
    element: <NirfPage />,
  },
  {
    path: '/vtu',
    element: <VtuPage />,
  },
  {
    path: '/naac',
    element: <NaacPage />,
  },
  {
    path: '/virtual-tour',
    element: <VirtualTourPage />,
  },
  {
    path: '/irins',
    element: <IrinsPage />,
  },

  // HOME SUBMENU
  {
    path: '/aboutjnnce',
    element: <AboutJnncePage />,
  },
  {
    path: '/vision',
    element: <VisionPage />,
  },
  {
    path: '/aboutnes',
    element: <AboutNesPage />,
  },

  // MESSAGES
  {
    path: '/messagefrompresident',
    element: <MessageFromPresidentPage />,
  },
  {
    path: '/messagefromsecretary',
    element: <MessageFromSecretaryPage />,
  },
  {
    path: '/messagefromprincipal',
    element: <MessageFromPrincipalPage />,
  },
  {
    path: '/messagefromac',
    element: <MessageFromAcPage />,
  },

  // GOVERNANCE
  {
    path: '/governingcouncil',
    element: <GoverningCouncilPage />,
  },
  {
    path: '/statutory-committees',
    element: <StatutoryCommitteesPage />,
  },
  {
    path: '/admin-committees',
    element: <AdminCommitteesPage />,
  },

  // ADMINISTRATION
  {
    path: '/principal',
    element: <PrincipalPage />,
  },
  {
    path: '/keyfunctionaries',
    element: <KeyFunctionariesPage />,
  },
  {
    path: '/administrativesection',
    element: <AdministrativeSectionPage />,
  },

  {
    path: '/downloads',
    element: <DownloadsPage />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  {
    path: '/greenpolicy',
    element: <GreenpolicyPage />,
  },
  {
    path: '/empbenefits',
    element: <EmpbenefitsPage />,
  },
  {
    path: '/automation',
    element: <AutomationPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },

  // ADMISSIONS
  {
    path: '/admissions',
    element: <AdmissionsPage />,
  },
  {
    path: '/ug',
    element: <UgPage />,
  },
  {
    path: '/pg',
    element: <PgPage />,
  },
  {
    path: '/phd',
    element: <PhdPage />,
  },
  {
    path: '/prospectus',
    element: <ProspectusPage />,
  },
  {
    path: '/admissioncontact',
    element: <AdmissionContactPage />,
  },

  // ACADEMICS
  {
    path: '/academics',
    element: <AcademicsPage />,
  },
  {
    path: '/departments',
    element: <DepartmentsPage />,
  },

  // DEPARTMENTS
  

  {
    path: '/coe',
    element: <CoePage />,
  },

  // PROFESSIONAL BODIES
  {
    path: '/iei',
    element: <IeiPage />,
  },
  {
    path: '/csi',
    element: <CsiPage />,
  },
  {
    path: '/sae',
    element: <SaePage />,
  },
  {
    path: '/iif',
    element: <IifPage />,
  },
  {
    path: '/iete',
    element: <IetePage />,
  },
  {
    path: '/iste',
    element: <IstePage />,
  },
  {
    path: '/ieee',
    element: <IeeePage />,
  },

  {
    path: '/mou',
    element: <MouPage />,
  },
  {
    path: '/newsletter',
    element: <NewsletterPage />,
  },

  // FACILITIES
  {
    path: '/facilities',
    element: <FacilitiesPage />,
  },
  {
    path: '/library',
    element: <LibraryPage />,
  },
  {
    path: '/hostel',
    element: <HostelPage />,
  },
  {
    path: '/sports',
    element: <SportsPage />,
  },
  {
    path: '/transport',
    element: <TransportPage />,
  },
  {
    path: '/mcentre',
    element: <McentrePage />,
  },
  {
    path: '/guesthouse',
    element: <GuesthousePage />,
  },
  {
    path: '/pof',
    element: <PofPage />,
  },
  {
    path: '/cba',
    element: <CbaPage />,
  },
  {
    path: '/cant',
    element: <CantPage />,
  },

  // STUDENT SUPPORT
  {
    path: '/studentsupport',
    element: <StudentsupportPage />,
  },
  {
    path: '/scholarship',
    element: <ScholarshipPage />,
  },
  {
    path: '/mentoring',
    element: <MentoringPage />,
  },
  {
    path: '/antiragging',
    element: <AntiraggingPage />,
  },
  {
    path: '/exam',
    element: <ExamPage />,
  },
  {
    path: '/feepayment',
    element: <FeepaymentPage />,
  },
  {
    path: '/nss',
    element: <NssPage />,
  },
  {
    path: '/redcross',
    element: <RedcrossPage />,
  },
  {
    path: '/nptel',
    element: <NptelPage />,
  },
  {
    path: '/culturalcrew',
    element: <CulturalcrewPage />,
  },
  {
    path: '/studentclubs',
    element: <StudentclubsPage />,
  },
  {
    path: '/meritoriousawards',
    element: <MeritoriousawardsPage />,
  },

  // CIE & RESEARCH PARK
  {
    path: '/cie',
    element: <CiePage />,
  },
  {
    path: '/nainc',
    element: <NaincPage />,
  },
  {
    path: '/newgeniedc',
    element: <NewgeniedcPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/tbi',
    element: <TbiPage />,
  },
  {
    path: '/rcentre',
    element: <RcentrePage />,
  },
  {
    path: '/rpark',
    element: <RparkPage />,
  },
  {
    path: '/consultaancy',
    element: <ConsultaancyPage />,
  },
  {
    path: '/funding',
    element: <FundingPage />,
  },

  // TRAINING & PLACEMENT
  {
    path: '/placement',
    element: <PlacementPage />,
  },
  {
    path: '/training',
    element: <TrainingPage />,
  },
  {
    path: '/internship',
    element: <InternshipPage />,
  },

  // IQAC
  {
    path: '/iqac',
    element: <IqacPage />,
  },
  {
    path: '/cm',
    element: <CmPage />,
  },
  {
    path: '/iqacmembers',
    element: <IqacmembersPage />,
  },
  {
    path: '/iqac-calendar',
    element: <IqacCalendarPage />,
  },
  {
    path: '/iqacmeepro',
    element: <IqacmeeproPage />,
  },

  // MORE
  {
    path: '/alumni',
    element: <AlumniPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/campuslife',
    element: <CampuslifePage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
  },
  {
    path: '/jnncecareer',
    element: <JnncecareerPage />,
  },
];