<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const jobs = ref([]);

async function getJobs() {
  const response = await axios.get(
    "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth"
  );
  async function postJobs() {
    const data = await post.post(
      "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth"
    );
  }
  jobs.value = response;
  console.log(response);
}
onMounted(() => {
  getJobs();
});
</script>

<template v-for="job in jobs" :key="job.id">
  <button class="jobs mt-5">{{ job.title }}</button>
</template>
<style scoped>
.jobs {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f0ede5;
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
}
</style>
