# LVM on software RAID
`https://wiki.archlinux.org/index.php/LVM_on_software_RAID`

| __LEVEL__ 	|                     	|                    	|                    	|                    	|                    	|                    	|                    	|
|---------	|---------------------	|--------------------	|--------------------	|--------------------	|--------------------	|--------------------	|--------------------	|
| high    	| LVM Logical Volumes 	| /                  	| /var               	| /swap              	| /home              	|                    	|                    	|
| middle  	| LVM Volume Groups   	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	|
| low     	| RAID Arrays         	| /dev/md0           	| /dev/md1           	| /dev/md0           	| /dev/md1           	| /dev/md0           	| /dev/md1           	|
| lower   	| Physical Partitions 	| /dev/sda1          	| /dev/sda2          	| /dev/sdb1          	| /dev/sdb2          	| /dev/sdc1          	| /dev/sdc2          	|
| lowest  	| Hard Drives         	| /dev/sda           	|                    	| /dev/sdb           	|                    	| /dev/sdc           	|                    	|

# Try 1

|    RAID and LVM Levels     |
|--------------------------|
| `/ ~ /var ~ /usr ~ /home`  |
|        `LVM Volume`        |
|        `RAID Volume`       |
| `Disk 1 ~ Disk 2 ~ Disk 3` |

# Try 2

```
| __LEVEL__ 	|                     	|                    	|                    	|                    	|                    	|                    	|                    	|
|-----------	|---------------------	|--------------------	|--------------------	|--------------------	|--------------------	|--------------------	|--------------------	|
| high      	| LVM Logical Volumes 	| /                  	| /var               	| /swap              	| /home              	|                    	|                    	|
| middle    	| LVM Volume Groups   	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	| /dev/VolGroupArray 	|
| low       	| RAID Arrays         	| /dev/md0           	| /dev/md1           	| /dev/md0           	| /dev/md1           	| /dev/md0           	| /dev/md1           	|
| lower     	| Physical Partitions 	| /dev/sda1          	| /dev/sda2          	| /dev/sdb1          	| /dev/sdb2          	| /dev/sdc1          	| /dev/sdc2          	|
| lowest    	| Hard Drives         	| /dev/sda           	|                    	| /dev/sdb           	|                    	| /dev/sdc           	|                    	|
```
