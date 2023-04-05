import React from "react";
import '../../../styles/checkboxes.css';

function Checkbox() {
    return <div className="radio--example">
        <h1>Checkbox</h1>
        <div className="light--theme__radio--example theme--wrapper">
            <h2>Светлая тема</h2>
            <h3>Large</h3>
            <div className="wrapper">
                <input id="cll1" type="checkbox" name="ll-checkbox"/>
                <label className="light--theme large" htmlFor="cll1">Label</label>

                <input id="cll2" type="checkbox" name="ll-checkbox" checked/>
                <label className="light--theme large" htmlFor="cll2">Label</label>

                <input id="cll3" type="checkbox" name="ll-checkbox-disabled" disabled/>
                <label className="light--theme large" htmlFor="cll3">Label</label>

                <input id="cll4" type="checkbox" name="ll-checkbox-disabled" checked disabled/>
                <label className="light--theme large" htmlFor="cll4">Label</label>
            </div>
            <h3>Medium</h3>
            <div className="wrapper">
                <input id="cml1" type="checkbox" name="ll-checkbox"/>
                <label className="light--theme medium" htmlFor="cml1">Label</label>

                <input id="cml2" type="checkbox" name="ll-checkbox" checked/>
                <label className="light--theme medium" htmlFor="cml2">Label</label>

                <input id="cml3" type="checkbox" name="ll-checkbox-disabled" disabled/>
                <label className="light--theme medium" htmlFor="cml3">Label</label>

                <input id="cml4" type="checkbox" name="ll-checkbox-disabled" checked disabled/>
                <label className="light--theme medium" htmlFor="cml4">Label</label>
            </div>
        </div>
        <div className="dark--theme__radio--example theme--wrapper">
            <h2>Темная тема</h2>
            <h3>Large</h3>
            <div className="wrapper">
                <input id="cld1" type="checkbox" name="ld-radio"/>
                <label className="dark--theme large" htmlFor="cld1">Label</label>

                <input id="cld2" type="checkbox" name="ld-radio" checked/>
                <label className="dark--theme large" htmlFor="cld2">Label</label>

                <input id="cld3" type="checkbox" name="ld-radio-disabled" disabled/>
                <label className="dark--theme large" htmlFor="cld3">Label</label>

                <input id="cld4" type="checkbox" name="ld-radio-disabled" checked disabled/>
                <label className="dark--theme large" htmlFor="cld4">Label</label>
            </div>
            <h3>Medium</h3>
            <div className="wrapper">
                <input id="cmd1" type="checkbox" name="md-radio"/>
                <label className="dark--theme medium" htmlFor="cmd1">Label</label>

                <input id="cmd2" type="checkbox" name="md-radio" checked/>
                <label className="dark--theme medium" htmlFor="cmd2">Label</label>

                <input id="cmd3" type="checkbox" name="md-radio-disabled" disabled/>
                <label className="dark--theme medium" htmlFor="cmd3">Label</label>

                <input id="cmd4" type="checkbox" name="md-radio-disabled" checked disabled/>
                <label className="dark--theme medium" htmlFor="cmd4">Label</label>
            </div>
        </div>
    </div>
}

export default Checkbox;
