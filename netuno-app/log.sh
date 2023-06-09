#!/bin/bash
tail -fn 1000 /srv/netuno/server.out | grep -A 15 -B 3 $'# \xe2\x9c\xa8 luismijias'
