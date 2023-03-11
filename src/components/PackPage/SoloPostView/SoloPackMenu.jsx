import React from 'react';
import SoloPackList from './SoloPackList';
import SoloPlaydates from './SoloPlaydates';

const SoloPackMenu = ({ setViewing, userIdentity }) => {
  const styles = {
    packList: {
      display: 'flex',
      flexDirection: 'column',
      height: '50vh'
    },
    parent: {
      // border: '3px solid grey',
      width: '30%',
      height: '100%',
      // paddingTop: '50px',
      position: 'sticky',
      top: '0px',
      bottom: '0px',
      alignItems: 'stretch'
      // borderRadius: '5%'
    },
    yourPacks: {
      paddingTop: '25px',
      // border: '1px solid black',
      height: '25px'
    },
    // packList: {
    //   // border: '2px solid grey',

    // },
    calendar: {
      height: '50vh'
    }
  };

  return (
    <div className="drawer" style={styles.parent}>
      <div className="drawer-content" />
      <div className="drawer-side">
        {/* <label for="my-drawer" className="drawer-overlay"></label> */}
        <ul className="menu p-1 w-100 bg-base-100 text-base-content">
          <div className="card shadow-xl" style={styles.yourPacks}>
            Your Packs
          </div>
          <div style={styles.packList}>
            <SoloPackList setViewing={setViewing} userIdentity={userIdentity} />
          </div>
          <div style={styles.calendar}>
            Calendar
            <SoloPlaydates userIdentity={userIdentity} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SoloPackMenu;
