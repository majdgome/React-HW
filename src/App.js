import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='cards-container'>

        <Store 
          isOnline='حضوري' 
          courseName='معسكر تطوير تطبيقات الويب باستخدام Javascript' 
          description = 'يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript' 
          isAvailable = {false} 
          location='الرياض'/>

        <Store 
          isOnline='حضوري' 
          courseName='UI/UX من البداية حتى الاتقان باستخدام Figma' 
          description = 'دورة UI/UX نبدأ بأساسيات UI حتى مراحل الإتقان باستخدام Figma' 
          isAvailable={true}  
          location='الرياض'/>

        <Store 
          isOnline='حضوري' 
          courseName='تطوير تطبيقات iOS باستخدام SwiftUI'  
          description = 'برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،' 
          isAvailable={false}   
          location='الرياض'/>

        <Store 
          isOnline='حضوري' 
          courseName='دورة تصميم المواقع بمنهجية No-Code'  
          description = 'نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة.' 
          isAvailable={false}  
          location='الرياض'/>

        <Store 
          isOnline='حضوري' 
          courseName='دورة ITIL لإدارة خدمات تقنية المعلومات'  
          description = 'نستهدف في هذه الدورة المهتمين بتعلم مفاهيم ITIL 4 من خلال تزويدهم بعدد من المفاهيم والتطبيقات العملية المختصة بخدمات تقنية المعلومات.' 
          isAvailable={true}   
          location='الرياض'/>

        <Store 
          iOnline='حضوري' 
          courseName='معسكر تطوير الألعاب باستخدام Unity للناشئين'  
          description = 'يهدف معسكر تطوير الألعاب باستخدام محرك الألعاب Unity ولغة البرمجة #C إلى تمكين المتدرب ابتداءً من المهارات الأساسية إلى تطوير وبرمجة الألعاب بشكل كامل' 
          isAvailable={true}   
          location='الرياض'/>

      </div>
      <Footer/>      
    </div>

  );
}


export default App;
