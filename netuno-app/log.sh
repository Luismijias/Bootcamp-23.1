#!/bin/bash
tail -fn 1000 /srv/netuno/server.out | grep -A 10 -B 3 "# ( luismijias"
