import { Component } from "../helpers/index.js";
import Axios from "axios";

class Summary extends Component {
	created() {
		this.summaries;

		this.getSummary();
	}

	getSummary() {
		Axios.get("//indonesia-covid-19.mathdro.id/api")
			.then((res) => res.data)
			.then((data) => {
				this.summaries = data;
				this.rendering(); // render ulang
			});
	}

	render() {
		if (this.summaries)
			return `
      <div class='container py-3'>
        <span class='h1'>Sumarry</span>
      </div>
      <div class='container pb-5'>
        <div class="row">
          <div class="col-sm-4">
            <div class="card shadow bg-danger text-white text-center">
              <div class="card-body">
                <h2 class="card-title">Meninggal</h1>
                <p class="card-text">${this.summaries.meninggal}Jiwa</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow bg-primary text-white text-center">
              <div class="card-body">
                <h2 class="card-title">Sembuh</h1>
                <p class="card-text">${this.summaries.sembuh} Jiwa</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow bg-warning text-white text-center">
              <div class="card-body">
                <h2 class="card-title">Jumlah Kasus</h1>
                <p class="card-text">${this.summaries.jumlahKasus} Jiwa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
	}
}

Component.register(Summary);
