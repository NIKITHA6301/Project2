
import Greeting from "./Greeting";
import AboutUsEx from "./AboutUsEx";
import ContactUsEx from "./ContactUsEx";
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import UseState3 from "./UseState3";
import UseState4 from "./UseState4";
import UseState5 from "./UseState5";
import CourseGoal1 from "./CourseGoal1";
import CourseGoal2 from "./CourseGoal2";
import BrightText from "./BrightText";
import MovieGridEx from "./MovieGridEx";
import Blog from "./Blog";


function App()
{
  return(
    <>
    <h1>first project</h1>
    <AboutUsEx />
    <ContactUsEx/>
    <Greeting name="ratan"/>
    <Greeting name="sathya"/>
    <Greeting name="anu"/>
    <UseState1/>
    <UseState2/>
    <UseState3/>
    <UseState4/>
    <UseState5/>
    <CourseGoal1 title="learn react" description="in-depth"/>
    <CourseGoal2 title="About Ratan Sir" description="Ratan sir nice"/>
    <BrightText color="red"/>
    <BrightText color="green"/>
    <BrightText color="blue"/>
    <MovieGridEx movies={[
   {title:"rakshasi",description:"horror",releaseDate:2007,rating:7},
   {title:"raki",description:"drama",releaseDate:2008,rating:8},
  ]}/>
  <Blog/>
    
   
    


      </>
 )
}
export default App;