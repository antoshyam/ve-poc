import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LeftArea from './components/common/workareas/VerticalSplitWorkArea/LeftArea';
import RightArea from './components/common/workareas/VerticalSplitWorkArea/RightArea';
import VerticalSplitWorkArea from './components/common/workareas/VerticalSplitWorkArea/VerticalSplitWorkArea';
import NavigationArea from './components/NavigationArea';
import Workarea from './components/Workarea';
import { initializeNavigation } from './store/actions/NavigationActions';
import styles from "./App.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataTree from './components/common/collection/DataTree';
import logo from './assets/images/Mazars_main.gif'

export default function App() {
  const dispatch = useDispatch()
  let treeData = useSelector(state => state.navigation.data)
  let workareaData = useSelector(state => state.workarea.data)

  useEffect(() => dispatch(initializeNavigation()), [dispatch])

  return (
    <div className={styles.app}>
      <div className={styles.branding}>
        <img src={logo} className={styles.brandingLogo}/>
        <div className={styles.brandingText}>REACHING NEW HEIGHTS TOGETHER</div>
      </div>
      <div className={styles.pageHeader}>{workareaData?.pageHeader ? workareaData?.pageHeader : "Audit Engagement"}</div>
      <div className={styles.content}>
        <div className={styles.navigation}>
            <NavigationArea data={treeData}/>
        </div>
        <div className={styles.workarea}>
          <Workarea data={workareaData}/>
        </div>
      </div>
    </div>
  );
}

