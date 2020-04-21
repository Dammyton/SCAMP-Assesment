<template>
  <div class="demo">
    <div class="container">
      <div class="mt-5">
        <b-card-group deck>
          <b-card
            bg-variant="default"
            border-variant="light"
            header-bg-variant="secondary"
            header-text-variant="white"
            header="Country Statistics"
            class="left"
          >
            <b-row>
              <b-col sm="5" md="5" class="mb-3">
                <b-input-group size="sm">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Type to Search"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-col>
              <b-col sm="2" md="3" class="my-1">
                <!-- Space between -->
              </b-col>
              <b-col sm="5" md="4" class="my-1">
                <b-form-group
                  label="Per page"
                  label-cols-sm="3"
                  label-cols-md="3"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-3"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <b-table
              striped
              hover
              show-empty
              small
              stacked="md"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :filterIncludedFields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              @filtered="onFiltered"
              caption-top
              :items="items"
              :fields="fields"
            >
              <template v-slot:table-caption>Statistics</template>

              <template v-slot:cell(index)="row">
                <span>{{row.index + 1}}</span>
              </template>

            </b-table>
            <b-col sm="12" md="12" class="my-1">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="right"
                size="md"
                class="my-0"
              ></b-pagination>
            </b-col>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "mhtable",
  data() {
    return {
      items: [],
      fields: [
        { key: "index", label: `S/N`, sortable: true },
        {
          key: "country",
          label: `Country`,
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "total_cases",
          label: `Total Cases`,
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        {
          key: "total_deaths",
          label: "Total Deaths",
          sortable: true
        },

        {
          key: "total_recovered",
          label: "Total Recoveries",
          sortable: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: []
    };
  },
  created() {
    let uri = `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search`;
    axios.get(uri).then(response => {
      console.log(response.data.data.rows, "View Statistics");
      
      this.items = response.data.data.rows;
    });
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  }
};
</script>
<style lang="css" scoped>
.demo {
  padding: 50px;
  padding-top: 0px;
  margin-top: 0px;
}
button.actions {
  margin: 3px;
}
h3 {
  margin-top: 50px;
}
.card-body{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.08), 0 5px 26px 0 rgba(67,94,131,.15);
}
</style>