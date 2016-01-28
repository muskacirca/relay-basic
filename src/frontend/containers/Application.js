import Application from '../components/Application';
import Relay from 'react-relay';

export default Relay.createContainer(Application, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        simTypes(first: 4) {
          edges {
            node {
              id,
              name
            }
          }
        }
      }`
  }
});
