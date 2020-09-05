import { Component } from "../helpers/index.js";
import Axios from "axios";

class Province extends Component {
	created() {
		this.dataEachProvince;

		this.getSummary();
	}

	getSummary() {
		Axios.get("//indonesia-covid-19.mathdro.id/api/provinsi")
			.then((res) => res.data)
			.then((data) => {
				this.dataEachProvince = data.data;
				this.rendering(); // render ulang
			});
	}

	render() {
		if (this.dataEachProvince)
			return `
      <div class='container py-3'>
        <span class='h1'>Province</span>
      </div>
      <div class='container'>
        <div class="row">
        ${this.dataEachProvince
					.map(
						(data) => `
            <div class="col-sm-4 p-1">
              <div class="shadow card text-center">
                <div class="card-body">
                  <h4 class="card-title">${data.provinsi}</h4>
                  <p class="card-text">
                    <span class='text-danger'>Meninggal ${data.kasusMeni} Jiwa</span>
                    <br />
                    <span class='text-warning'>Positif ${data.kasusPosi} Jiwa</span>
                    <br />
                    <span class='text-primary'>Sembuh ${data.kasusSemb} Jiwa</span>
                  </p>
                </div>
              </div>
            </div>
            `
					)
					.join("")}
        </div>
      </div>
    `;
	}
}

Component.register(Province);
