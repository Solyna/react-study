import React, { useState } from 'react';

function HooksExample2(){
    /* React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。 */
    /* useState不能在if...else...这样的条件语句中进行调用，必须要按照相同的顺序进行渲染 */
    const [age,setAge] = useState(18);
    const [sex,setSex] = useState('女');
    const [work,setWork] = useState('前端工程师');
    return(
        <div>
            <p>JSPang 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>
        </div> 
    )
}
 
export default HooksExample2;

/* useEffect() */