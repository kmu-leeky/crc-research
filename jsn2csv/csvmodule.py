import os, csv

class CSVmodule():

	def __get_KeyValue(self, h_key, once_dict):
		value = dictionary.get(h_key)
		return value

	def __get_KeyValueList(self, header):
		return

	def write_CSV(self, path, fileName, dictList):
		save_path = os.path.join(path,fileName)
		#print(header)
		header = [col for col in dictList[0]]

		with open(save_path, 'w', encoding='utf-8', newline='') as csvfile:
			writer = csv.DictWriter(csvfile, fieldnames=header)
			writer.writeheader()

			for dictRow in dictList:
				i = 0
				joinRow = {header[i]:dictRow.get(header[i]) for i in range(len(header))}
				writer.writerow(joinRow)