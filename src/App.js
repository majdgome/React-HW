import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='cards-container'>
        <Store isOnline='حضوري' courseName='معسكر تطوير تطبيقات الويب باستخدام Javascript' description = 'يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript' isAvailable= ''  location='الرياض' isAvailableColor='red'/>
        <Store isOnline='حضوري' courseName='UI/UX من البداية حتى الاتقان باستخدام Figma'  description = 'دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma' isAvailable='متاح'  location='الرياض' isAvailableColor='red'/>
        <Store isOnline='حضوري' courseName='تطوير تطبيقات iOS باستخدام SwiftUI'  description = 'برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،' isAvailable='متاح'  location='الرياض' isAvailableColor='red'/>
        <Store isOnline='حضوري' courseName='دورة تصميم المواقع بمنهجية No-Code'  description = 'نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة.' isAvailable='متاح'  location='الرياض' isAvailableColor='red'/>
        <Store isOnline='حضوري' courseName='دورة الابتكار الرقمي'  description = 'للمهتمين أو لرواد الأعمال التقنية' isAvailable='متاح'  location='الرياض' isAvailableColor='red'/>
        <Store iOnline='حضوري' courseName='مقدمة في DevOps'  description = 'تعلم أهمية DevOps وأساسياته' isAvailable='متاح'  location='الرياض' isAvailableColor='red'/>
      </div>
      {/* <Footer/>       */}
    </div>

  );
}


export default App;
