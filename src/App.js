import ConditionalRenderingComponent from "./ConditioanalRendering";

export default function App({ users }) {
  return users.map((singleUser, index) => {
    return <ConditionalRenderingComponent isStudent={singleUser.isStudent} name={singleUser.name} id={singleUser.id} />;
  });

  // let usersComponent = [];

  // for (let singleUser of users) {
  //   usersComponent.push(<ConditionalRenderingComponent isStudent={singleUser.isStudent} name={singleUser.name} id={singleUser.id} />);
  // }

  // return usersComponent;
}

/**
 * map, reduce and filter
 */
