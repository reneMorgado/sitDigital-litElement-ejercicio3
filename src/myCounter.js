import { LitElement, html } from 'lit-element';

class MyCounter extends LitElement {
    static get properties() {
        return {
            counter: { type: Number }
        };
    }
    constructor() {
        super()
        this.counter = 0
    }
    render() {
        return html`
        <h1>Contador: ${this.counter}</h1>
        <button @click="${this._onIncrement}">Incrementar</button>
        <button @click="${()=>(this.counter -= 1)}">Decrementar</button>
        `;
    }

    _onIncrement(){
        this.counter += 1
    }
}
customElements.define('my-counter', MyCounter);