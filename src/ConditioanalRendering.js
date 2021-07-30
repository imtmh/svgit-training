import Student from "./Student";
import Teacher from "./Teacher";

export default function ConditionalRenderingComponent({ isStudent, name, id }) {
  return isStudent ? <Student name={name} id={id}></Student> : <Teacher name={name} id={id} />;

  // if (isStudent) {
  //   return <Student name={name} id={id}></Student>;
  // } else {
  //   return <Teacher name={name} id={id} />;
  // }
}
