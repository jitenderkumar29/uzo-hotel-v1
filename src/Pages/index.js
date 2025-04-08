import { lazy, Suspense } from "react";
import { useStore } from "../Context/AppContext";
import { Routes, Route, Navigate } from "react-router-dom";

import { removeUrlParam } from "../Tools/helper";

import ModalSignUp from "../Components/_ModalSignUp";
import ModalMembershipPlans from "../Components/_ModalMembershipPlans";
import ModalVerify from "../Components/_ModalVerify";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Login = lazy(() => import("./Login"));
const Registration = lazy(() => import("./Registration"));
const CorporateLogin = lazy(() => import("./CorporateLogin"));
const SapphirePremier = lazy(() => import("./SapphirePremier"));
const States = lazy(() => import("./States"));
const SweetStories = lazy(() => import("./SweetStories"));
const SweetStory = lazy(() => import("./SweetStory"));
const Faq = lazy(() => import("./Faq"));
const TermsOfUse = lazy(() => import("./TermsOfUse"));
const WriteToUs = lazy(() => import("./WriteToUs"));
const Career = lazy(() => import("./Career"));
const PrivacyPolicies = lazy(() => import("./PrivacyPolicies"));
const FraudReporting = lazy(() => import("./FraudReporting"));
const PrivacyFeatures = lazy(() => import("./PrivacyFeatures"));
const ThirdPartyTermsOfUse = lazy(() => import("./ThirdPartyTermsOfUse"));
const CsrResponsibilities = lazy(() => import("./CsrResponsibilities"));
const Blogs = lazy(() => import("./Blogs"));
const Blog = lazy(() => import("./Blog"));
const ContactUs = lazy(() => import("./ContactUs"));
const MembershipPlans = lazy(() => import("./MembershipPlans"));
const NsCenter = lazy(() => import("./NsCenter"));
const NsPrivilege = lazy(() => import("./NsPrivilege"));
const PhotoGallery = lazy(() => import("./PhotoGallery"));

const ProfileHome = lazy(() => import("./ProfileHome"));
const ProfileFilter = lazy(() => import("./ProfileFilter"));
const ProfileInbox = lazy(() => import("./ProfileInbox"));
const ProfileSearch = lazy(() => import("./ProfileSearch"));
const ProfileSettings = lazy(() => import("./ProfileSettings"));
const PartnerProfile = lazy(() => import("./PartnerProfile"));
const UserProfile = lazy(() => import("./UserProfile"));

const EditDesiredPartner = lazy(() => import("./EditDesiredPartner"));

const Pages = () => {
  const { login, searchParams, navigate } = useStore();

  const modal = searchParams("modal");

  const pages = [
    { Link: "/", View: login ? ProfileHome : Home },
    { Link: "/about", View: About },
    { Link: "/login", View: Login },
    { Link: "/registration", View: Registration },
    { Link: "/corporate-login", View: CorporateLogin },
    { Link: "/sapphire-premier", View: SapphirePremier },
    { Link: "/find/:find", View: States },
    { Link: "/sweet-stories", View: SweetStories },
    { Link: "/sweet-stories/:story", View: SweetStory },
    { Link: "/faq", View: Faq },
    { Link: "/terms-of-use", View: TermsOfUse },
    { Link: "/write-to-us", View: WriteToUs },
    { Link: "/career", View: Career },
    { Link: "/privacy-policies", View: PrivacyPolicies },
    { Link: "/fraud-reporting", View: FraudReporting },
    { Link: "/privacy-features", View: PrivacyFeatures },
    { Link: "/third-party-terms-of-use", View: ThirdPartyTermsOfUse },
    { Link: "/csr-responsibilities", View: CsrResponsibilities },
    { Link: "/blogs", View: Blogs },
    { Link: "/blogs/:blog", View: Blog },
    { Link: "/contact-us", View: ContactUs },
    { Link: "/membership-plans", View: MembershipPlans },
    { Link: "/ns-center", View: NsCenter },
    { Link: "/ns-privilege", View: NsPrivilege },
    { Link: "/photo-gallery", View: PhotoGallery },
    { Link: "/profile-home", View: ProfileHome },
    { Link: "/profile-filter", View: ProfileFilter },
    { Link: "/profile-search", View: ProfileSearch },
    { Link: "/profile-settings", View: ProfileSettings },
    { Link: "/profile-inbox", View: ProfileInbox },
    { Link: "/partner-profile", View: PartnerProfile },
    { Link: "/user-profile", View: UserProfile },
    { Link: "/edit-desired-partner", View: EditDesiredPartner },
  ];

  const modals = {
    verify: { View: ModalVerify },
    register: { View: ModalSignUp },
    compareplans: { View: ModalMembershipPlans },
  };

  if (modals[modal]) document.body.classList.add("scroll-hidden");
  else document.body.removeAttribute("class");

  return (
    <Suspense fallback={<div className="Loading">Loading...</div>}>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} />} />
        {pages.map(({ Link, View }, index) => {
          return <Route key={index} path={Link} element={<View />} />;
        })}
      </Routes>

      <section
        className={`Modal${modals[modal] ? " active" : ""}`}
        onClick={() => navigate(removeUrlParam("modal"))}
      >
        {Object.entries(modals).map(([key, { View }], index) => {
          return key === modal && <View key={index} />;
        })}
      </section>
    </Suspense>
  );
};

export default Pages;
