#!/usr/bin/env bash

set -Eeuxo pipefail

PLATFORM="$(uname -s | tr 'A-Z' 'a-z')"
REPORT_BASE=report

[ ! -d ${REPORT_BASE} ] && mkdir -p ${REPORT_BASE}

echo '$ uname: '$(uname) > ${REPORT_BASE}/report-system.txt

if [[ "${PLATFORM}" == "linux" ]]; then
  echo 'Memory Info:' >> ${REPORT_BASE}/report-system.txt
  cat /proc/meminfo  | grep MemTotal >> ${REPORT_BASE}/report-system.txt

  echo 'CPU Info:' >> ${REPORT_BASE}/report-system.txt
  cat /proc/cpuinfo  | grep 'model name' | uniq >> ${REPORT_BASE}/report-system.txt
  echo -e "cpu count:\t" $(cat /proc/cpuinfo  | grep 'model name' | wc -l)>> ${REPORT_BASE}/report-system.txt

elif [[ "${PLATFORM}" == "darwin" ]]; then
  echo 'Memory Info:' >> ${REPORT_BASE}/report-system.txt
  sysctl hw.memsize >> ${REPORT_BASE}/report-system.txt

  echo 'CPU Info:' >> ${REPORT_BASE}/report-system.txt
  sysctl machdep.cpu.brand_string >> ${REPORT_BASE}/report-system.txt
  sysctl hw.ncpu >> ${REPORT_BASE}/report-system.txt

else
  echo "System Information for platform ${PLATFORM}"
fi




ab -c 1 -n 100 http://localhost:19001/ | tee ${REPORT_BASE}/report-hou-1-100-index.txt
ab -c 1 -n 100 http://localhost:19001/404.html | tee ${REPORT_BASE}/report-hou-1-100-404.txt
ab -c 1 -n 100 http://localhost:19001/js/index.a955160d.bundle.js | tee ${REPORT_BASE}/report-hou-1-100-js.txt
ab -c 1 -n 100 http://localhost:19001/js/vendors.a955160d.bundle.js.map | tee ${REPORT_BASE}/report-hou-1-100-map.txt

ab -c 10 -n 1000 http://localhost:19001/ | tee ${REPORT_BASE}/report-hou-10-1000-index.txt
ab -c 10 -n 1000 http://localhost:19001/404.html | tee ${REPORT_BASE}/report-hou-10-1000-404.txt
ab -c 10 -n 1000 http://localhost:19001/js/index.a955160d.bundle.js | tee ${REPORT_BASE}/report-hou-10-1000-js.txt
ab -c 10 -n 1000 http://localhost:19001/js/vendors.a955160d.bundle.js.map | tee ${REPORT_BASE}/report-hou-10-1000-map.txt

ab -c 1 -n 100 http://localhost:19002/ | tee ${REPORT_BASE}/report-nginx-1-100-index.txt
ab -c 1 -n 100 http://localhost:19002/404.html | tee ${REPORT_BASE}/report-nginx-1-100-404.txt
ab -c 1 -n 100 http://localhost:19002/js/index.a955160d.bundle.js | tee ${REPORT_BASE}/report-nginx-1-100-js.txt
ab -c 1 -n 100 http://localhost:19002/js/vendors.a955160d.bundle.js.map | tee ${REPORT_BASE}/report-nginx-1-100-map.txt

ab -c 10 -n 1000 http://localhost:19002/ | tee ${REPORT_BASE}/report-nginx-10-1000-index.txt
ab -c 10 -n 1000 http://localhost:19002/404.html | tee ${REPORT_BASE}/report-nginx-10-1000-404.txt
ab -c 10 -n 1000 http://localhost:19002/js/index.a955160d.bundle.js | tee ${REPORT_BASE}/report-nginx-10-1000-js.txt
ab -c 10 -n 1000 http://localhost:19002/js/vendors.a955160d.bundle.js.map | tee ${REPORT_BASE}/report-nginx-10-1000-map.txt