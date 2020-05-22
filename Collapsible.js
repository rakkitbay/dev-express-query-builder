import React, {useState} from 'react'

export const Collapsible = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const togglePanel1 = () => {
        setOpen1(!open1);
    }
    const togglePanel2 = () => {
        setOpen2(!open2);
    }
    const togglePanel3 = () => {
        setOpen3(!open3);
    }
    const togglePanel4 = () => {
        setOpen4(!open4);
    }

//     Table Properties
// 	Name
// 	Alias
// Available Tables and Views
// (input text for search)
// Parameters
    return (
        <div className="properties">
            <div onClick={togglePanel1} className="itemHeader"> { open1 ? (<button className="openArrow" ></button>) : (<button className="closeArrow" ></button>) }
              <a><strong>  Query Properties</strong></a>
            </div>
            {open1 ? (
            <div className="content">
                <table>
                    <tbody>
                    <tr>
                        <td align="right">Name </td>
                        <td align="left"><input type="text" name="first" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Filter </td>
                        <td align="left"><input type="text" name="last" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Group Filter </td>
                        <td align="left"><input type="text" name="email" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Select All (*) </td>
                        <td align="left"><input type="text" name="email" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Select Top </td>
                        <td align="left"><input type="text" name="email" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Offset </td>
                        <td align="left"><input type="text" name="email" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Select distinct </td>
                        <td align="left"><input type="text" name="email" /></td>
                    </tr>
                    </tbody>
                 </table>
            </div>
            ) :
            null }

<div onClick={togglePanel2} className="itemHeader"> { open2 ? (<button className="openArrow" ></button>) : (<button className="closeArrow" ></button>) }
              <a><strong> Table Properties</strong></a>
            </div>
            {open2 ? (
            <div className="content">
                <table>
                   <tbody>
                    <tr>
                        <td align="right">Name </td>
                        <td align="left"><input type="text" name="Name" /></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td align="right">Alias </td>
                        <td align="left"><input type="text" name="Alias" /></td>
                    </tr>
                  </tbody>
                 </table>
            </div>
            ) :
            null }

<div onClick={togglePanel3} className="itemHeader"> { open3 ? (<button className="openArrow" ></button>) : (<button className="closeArrow" ></button>) }
              <a><strong>  Available Table and Views</strong></a>
            </div>
            {open3 ? (
            <div className="content">
                <table>
                    <tbody>
                    <tr>
                        <td align="left"><input type="text" name="search" placeholder="Enter text to search..."/></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        Table list (Drag and drop)
                        <ul>
                            <li>Table 1</li>
                            <li>Table 2</li>
                            <li>Table 3</li>
                        </ul>
                    </tr>
                    </tbody>
                 </table>
            </div>
            ) :
            null }

<div onClick={togglePanel4} className="itemHeader"> { open4 ? (<button className="openArrow" ></button>) : (<button className="closeArrow" ></button>) }
              <a><strong>  Parameters</strong></a>
            </div>
            {open4 ? (
            <div className="content">
                <table>
                    <tbody>
                    <tr>
                        <td align="right">Add Parameters</td>
                        <td align="left"><input type="text" name="first" /></td>
                    </tr>
                    </tbody>
                 </table>
            </div>
            ) :
            null }
        </div>
    )
}
