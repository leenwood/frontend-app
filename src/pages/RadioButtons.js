import React from "react";
import '../styles/radiobuttons.css';
import '../styles/index.css';

function RadioButtons() {
    return <div className="radio--example">
        <h1>Radio</h1>
        <div className="light--theme__radio--example theme--wrapper">
            <h2>Светлая тема</h2>
            <h3>Large</h3>
            <div className="wrapper">
                <input id="ll1" type="radio" name="ll-radio"/>
                <label className="light--theme large" htmlFor="ll1">Label</label>

                <input id="ll2" type="radio" name="ll-radio" checked/>
                <label className="light--theme large" htmlFor="ll2">Label</label>

                <input id="ll3" type="radio" name="ll-radio-disabled" disabled/>
                <label className="light--theme large" htmlFor="ll3">Label</label>

                <input id="ll4" type="radio" name="ll-radio-disabled" checked disabled/>
                <label className="light--theme large" htmlFor="ll4">Label</label>
            </div>
            <h3>Medium</h3>
            <div className="wrapper">
                <input id="ml1" type="radio" name="ml-radio"/>
                <label className="light--theme medium" htmlFor="ml1">Label</label>

                <input id="ml2" type="radio" name="ml-radio" checked/>
                <label className="light--theme medium" htmlFor="ml2">Label</label>

                <input id="ml3" type="radio" name="ml-radio-disabled" disabled/>
                <label className="light--theme medium" htmlFor="ml3">Label</label>

                <input id="ml4" type="radio" name="ml-radio-disabled" checked disabled/>
                <label className="light--theme medium" htmlFor="ml4">Label</label>
            </div>
        </div>
        <div className="dark--theme__radio--example theme--wrapper">
            <h2>Темная тема</h2>
            <h3>Large</h3>
            <div className="wrapper">
                <input id="ld1" type="radio" name="ld-radio"/>
                <label className="dark--theme large" htmlFor="ld1">Label</label>

                <input id="ld2" type="radio" name="ld-radio" checked/>
                <label className="dark--theme large" htmlFor="ld2">Label</label>

                <input id="ld3" type="radio" name="ld-radio-disabled" disabled/>
                <label className="dark--theme large" htmlFor="ld3">Label</label>

                <input id="ld4" type="radio" name="ld-radio-disabled" checked disabled/>
                <label className="dark--theme large" htmlFor="ld4">Label</label>
            </div>
            <h3>Medium</h3>
            <div className="wrapper">
                <input id="md1" type="radio" name="md-radio"/>
                <label className="dark--theme medium" htmlFor="md1">Label</label>

                <input id="md2" type="radio" name="md-radio" checked/>
                <label className="dark--theme medium" htmlFor="md2">Label</label>

                <input id="md3" type="radio" name="md-radio-disabled" disabled/>
                <label className="dark--theme medium" htmlFor="md3">Label</label>

                <input id="md4" type="radio" name="md-radio-disabled" checked disabled/>
                <label className="dark--theme medium" htmlFor="md4">Label</label>
            </div>
        </div>
    </div>
}

export default RadioButtons;