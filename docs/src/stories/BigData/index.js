import React from 'react'

import DropdownTreeSelect from '../../../../src'

import './index.css'
import bigData from './big-data.json'

const onChange = (curNode, selectedNodes) => {
    console.log('onChange::', curNode, selectedNodes)
}
const onAction = (node, action) => {
    console.log('onAction::', action, node)
}
const onNodeToggle = curNode => {
    console.log('onNodeToggle::', curNode)
}

const BigData = () => (
<div>  
    <h1>Tree with large amount of nodes </h1>
    <p>Performance testing with large amount of nodes (15k+). Searching and rendering should be smooth.</p> 
    <h1> Code Example </h1>
    <div>
      <div>added new props:</div>  
      <ul>
        <li>tagModel=multiple|single   default will be multiple</li>
        <li>checkboxMode=parent|both   default will be parent, will exclude all children nodes, if both will check all nested children nodes</li>
      </ul>
      
      
    </div>
    <pre>
      &lt;DropdownTreeSelect data=&#123;bigData&#125; onChange=&#123;onChange&#125; onAction=&#123;onAction&#125; onNodeToggle=&#123;onNodeToggle&#125; 
      tagMode=&quot;single&quot; 
      checkboxMode=&quot;both&quot; /&gt;

    </pre>

<DropdownTreeSelect data={bigData}
    onChange={onChange}
    onAction={onAction}
    onNodeToggle={onNodeToggle}
    inlineSearchInput="true"
    tagMode="single"
    checkboxMode="both"/></div>)

export default BigData
