import React,{useState} from "react";
import Row from "../../grid/Row";
import Col from "../../grid/Col";
import Icon from "../../graphic/Icon";

const VerticalSplitWorkArea = props => {

    let {
      splitCols
    } = {...props}
    let [_displayLeftArea, set_DisplayLeftArea] = useState(true)
    let [_leftAreaColumns, set_LeftAreaColumns] = useState(splitCols)
    let [_rightAreaColumns,set_RightAreaColumns] = useState({l: 12-splitCols.l, m: 12-splitCols.m, s: 12-splitCols.s})

    let leftArea = null,
    rightArea = null

    const handleSplitterClick = () => {
        if(_displayLeftArea){
            set_LeftAreaColumns({l:0,m:0,s:0})
            set_RightAreaColumns({l:12,m:12,s:12})
            setTimeout(() => set_DisplayLeftArea(false),300)
        }else{
            
            set_RightAreaColumns({l: 12-splitCols.l, m: 12-splitCols.m, s: 12-splitCols.s})
            setTimeout(() =>  set_DisplayLeftArea(true),500)
            setTimeout(() => set_LeftAreaColumns(splitCols),100)
        }
    }

    React.Children.map(props.children, child=>{
        if(child.props.type == 'LeftArea')
            leftArea = child
        else if(child.props.type == 'RightArea')
            rightArea = child
    })
  return (
    <Col className="w3-display-container w3-margin-top">
      <Col
        {..._leftAreaColumns}
        style={{overflow: 'hidden', transition: 'width .5s', display: _displayLeftArea ? 'block' : 'none'}}
        className="w3-display-container"
      >
        {leftArea}
      </Col>
      <Col {..._rightAreaColumns} className='w3-padding w3-display-container w3-right' style={{minHeight: 75 + 'vh', transition:'width .5s'}}>
        {rightArea}
        <Row className='w3-display-left w3-display-container w3-light-grey' style={{height:100 + '%', width:.1 + 'em', cursor:'pointer'}} onClick={handleSplitterClick}>
            <Icon key={_displayLeftArea} faClass={_displayLeftArea ? 'fas fa-angle-left' : 'fas fa-angle-right'} className='w3-display-middle w3-blue w3-large w3-round'/>
        </Row>
      </Col>
    </Col>
  );
};

export default VerticalSplitWorkArea;
VerticalSplitWorkArea.defaultProps= {
  splitCols : {l:2, m:2, s:3}
}
