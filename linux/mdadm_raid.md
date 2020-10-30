
# BASIC COMMANDS

## Status
```
cat /proc/mdstat
mdadm --detail /dev/md0
```

## Show partition details
```
fdisk -l /dev/sdb1 /dev/sda1
```

## Copy partition tables

```
sfdisk -d /dev/sdb | sfdisk /dev/sda
```

## Clone partition

```
dd if=/dev/sdb1 of=/dev/sda1
```
From `sdb1` to `sda1`

## Add partition to array
```
mdadm /dev/md0 --add /dev/sdb1
mdadm --grow /dev/md0 --raid-devices=3
```
This adds partition as 'hot', not 'spare'

## Removing partition
```
mdadm /dev/md0 --fail /dev/{failed drive}
mdadm /dev/md0 --remove /dev/{failed drive}
mdadm --grow /dev/md0 --raid-devices=2
```

## Watch recovery progress
```
watch -n 0.1 cat /proc/mdstat
```

```
while true; do sleep 1; clear; sudo mdadm --detail /dev/md0; echo; cat /proc/mdstat; done
```

## Make bootable new disk
```
grub-install /dev/sda
grub-install /dev/sdb
grub-install /dev/sdc
grub-install /dev/sdd
...
```


## Monitor USB events
```
udevadm monitor
```
