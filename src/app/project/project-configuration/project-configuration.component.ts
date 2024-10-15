import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-project-configuration',
  templateUrl: './project-configuration.component.html',
  styleUrls: ['./project-configuration.component.css']
})
export class ProjectConfigurationComponent implements OnInit {
  projectName: string = '';
  customerName: string = '';
  sourceSystem: string = '';
  targetSystem: string = '';
  sourceSelection: string = 'repository';
  codeRepository: string = '';
  sourceFolder: string = '';
  singleFile: string = '';
  selectedFolder: string = '';
  selectedFile: string = '';
  selectedLogFile: string = '';
  selectedModelFile: string = '';
  selectedSampleData: string = '';
  // Options for Source System Type
  sourceSystems: string[] = ['Java', '.NET', 'COBOL', 'RPG', 'SAP ECC'];

  // Options for Target System Type
  targetSystems: string[] = ['Angular', 'node.js', 'React', 'Java', '.NET', 'SAP S/4 HANA'];
  storageAccounts: string[] = ['Storage Account 1', 'Storage Account 2', 'Storage Account 3']; // Example accounts
  selectedStorageAccount: string = '';
  
  

  ngOnInit(){
    console.log("starting project config component...");
  }
   onSetupClick() {
    if (this.sourceSelection === 'repository') {
      console.log('Setting up Code Repository:', this.codeRepository);
    } else if (this.sourceSelection === 'folder') {
      console.log('Setting up Source Code Folder:', this.sourceFolder);
    } else if (this.sourceSelection === 'file') {
      console.log('Setting up Single File:', this.singleFile);
    }
  }
  onFolderSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFolder = fileList[0].webkitRelativePath.split('/')[0]; // Get folder name
    }
  }

  // Function to handle file selection
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file.name; // Get file name
    }
  }
  onLogFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedLogFile = file.name; // Get log file name
    }
  }
  onSampleDataSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedSampleData = file.name; // Get sample data file name
    }
  }

  onModelFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedModelFile = file.name; // Get model file name
    }
  }
  onStorageAccountSelect() {
    if (this.selectedStorageAccount) {
      console.log('Selected Storage Account:', this.selectedStorageAccount);
    } else {
      console.log('No storage account selected');
    }
  }



}
